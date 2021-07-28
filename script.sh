cat .env.devel | while read line || [[ -n $line ]];
do
   echo $line
done