import glob
import json
import xmltodict
import yaml


def convert(xml_file):
    filename = "../_data/{}.yaml".format(xml_file.split('/')[2].split('.')[0])

    book_data = {}
    book_data['books'] = []

    with open(xml_file, 'r') as f:
        with open(filename, 'w') as json_file:

            xml_data = xmltodict.parse(f, xml_attribs=True)

            for book_review in xml_data['GoodreadsResponse']['reviews']['review']:
                started_reading = book_review['started_at']
                finished_reading = book_review['read_at']
                rating = book_review['rating']
                book = book_review['book']
                book_name = unicode(book['title']).encode('UTF-8')
                book_photo = book['image_url']
                book_url = book['link']
                book_author = book['authors']['author']['name'].encode('UTF-8')

                book_data['books'].append({
                    'title': book_name,
                    'author': book_author,
                    'goodreads_url': book_url,
                    'photo_url': book_photo,
                })

                json_file.write("- title: \"{}\"\n  author: {}\n  goodreads_url: '{}'\n  photo_url: '{}'\n  started_reading: '{}'\n  finished_reading: '{}'\n  rating: {}\n".format(book_name, book_author, book_url, book_photo, started_reading, finished_reading, rating))



def write_json(filename, data):
    with open(filename, 'w') as json_file:
        json_file.write(data)
    return


def main():
    # get the xml files from data/
    xml_files = glob.glob('../_data/*.xml')

    for xfile in xml_files:

        data = convert(xfile)

if __name__ == '__main__':
    exit(main())
