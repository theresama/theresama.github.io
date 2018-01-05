source ../../venv/bin/activate
wget -O ../_data/currently-reading.xml https://www.goodreads.com/review/list/8086458.xml?key=AyBL1dP9FjhaN6spswSxg&v=2&user_id=8086458-theresa&shelf=currently-reading&per_page=200
wget -O ../_data/read.xml https://www.goodreads.com/review/list/8086458.xml?key=AyBL1dP9FjhaN6spswSxg&v=2&user_id=8086458-theresa&shelf=read&per_page=200
python xml2yaml.py
deactivate
