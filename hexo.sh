hexo clean
hexo g
hexo d

sleep 1.5

info=$1
if ["$info" = ""];
then info=":pencil: update content"
fi
git pull
git add -A
git commit -m "$info"
git push