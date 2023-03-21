from bottle import route, run, template, static_file, SimpleTemplate
import os, time

@route('/')
def index():
    return template('templates/index.html')

@route('/transcript')
def transcript():
    return template('templates/transcript.html')

@route('/contact')
def transcript():
    return template('templates/contact.html')

@route('/portfolio')
def portfolio():
    heads = ['<link rel="stylesheet" href="css/portfolio.css">',
    '<link href="https://fonts.cdnfonts.com/css/senbatsu" rel="stylesheet">',
    '<link href="https://fonts.cdnfonts.com/css/indian-steeds" rel="stylesheet">',
    '<link href="https://fonts.cdnfonts.com/css/omnes-2" rel="stylesheet">',
    '<link href="https://fonts.cdnfonts.com/css/sweet-bread?styles=149710" rel="stylesheet">',
    '<link href="https://fonts.cdnfonts.com/css/hubballi" rel="stylesheet">', 
    '<link href="https://fonts.cdnfonts.com/css/freitag-trial" rel="stylesheet">',
    '<link href="https://fonts.cdnfonts.com/css/division-one" rel="stylesheet">']
    return template('templates/portfolio.html', heads=heads, t=time.time())

@route('/css/<file>')
def send_css(file):
    return static_file(file, root='static/css/')

@route('/js/<file>')
def send_js(file):
    return static_file(file, root='static/js/')

if __name__ == '__main__':
    run(host='0.0.0.0', port=int(os.getenv('PORT', default=5000)), debug=True, reloader=True)