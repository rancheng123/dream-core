FROM node:7.3.0 AS nodejs-builder


MAINTAINER      Rancheng "ran.cheng@mydreamplus.com"

RUN mkdir -p /usr/src/
WORKDIR /usr/src/

#拉取代码
RUN mkdir -p /root/.ssh && \
 chmod 700 /root/.ssh
ADD id_rsa /root/.ssh/
RUN chmod 600 /root/.ssh/id_rsa
ADD ssh_config /etc/ssh/ssh_config
RUN git clone -b dev git@code.aliyun.com:mxj-fe/operation.git


# 测试 start
#RUN mkdir -p /usr/src/operation
#COPY . /usr/src/operation
# 测试 end


#加载依赖
WORKDIR /usr/src/operation
# 耗时2
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
# 耗时3
RUN cnpm install


#执行编译命令
RUN npm run business_dev


FROM nginx
#从nodejs-builder环境  复制
COPY --from=nodejs-builder /usr/src/operation /usr/share/nginx/html/operation
ADD nginx.conf /etc/nginx/
ADD default.conf /etc/nginx/conf.d/


#EXPOSE 8399


# 构建镜像
# docker build --no-cache -t rancheng/node:7.3.0 .

# 停止容器
# docker stop rancheng

# 执行容器
# docker run -p 8044:80 rancheng/node:7.3.0



# 进入容器
# docker exec -it    /bin/bash









