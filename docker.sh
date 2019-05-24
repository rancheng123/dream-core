
startTime=$(date +%s)

docker build --no-cache -t rancheng/node:7.3.0 .

endTime=$(date +%s)
totalTime=`expr $endTime - $startTime`
echo "docker build 总时间是" + $totalTime + "秒"

docker run -p 8044:80 rancheng/node:7.3.0




