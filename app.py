from bottle import route, run, template, static_file, SimpleTemplate
import os, time

@route('/')
def index():
    return template('templates/index.html', t=time.time())

@route('/transcript')
def transcript():
    return template('templates/transcript.html', t=time.time())

@route('/contact')
def transcript():
    return template('templates/contact.html', t=time.time())

@route('/portfolio')
def portfolio():
    heads = [
        '<link rel="stylesheet" href="css/portfolio.css">',
        '<link rel="stylesheet" href="css/wind.css">',
        '<link rel="stylesheet" href="css/mobile/portfolio.css">',
        '<link href="https://fonts.cdnfonts.com/css/senbatsu" rel="stylesheet">',
        '<link href="https://fonts.cdnfonts.com/css/indian-steeds" rel="stylesheet">',
        '<link href="https://fonts.cdnfonts.com/css/omnes-2" rel="stylesheet">',
        '<link href="https://fonts.cdnfonts.com/css/sweet-bread?styles=149710" rel="stylesheet">',
        '<link href="https://fonts.cdnfonts.com/css/hubballi" rel="stylesheet">', 
        '<link href="https://fonts.cdnfonts.com/css/freitag-trial" rel="stylesheet">',
        '<link href="https://fonts.cdnfonts.com/css/division-one" rel="stylesheet">',
        '<link href="https://fonts.cdnfonts.com/css/minguwest" rel="stylesheet">',
        '<link href="https://fonts.cdnfonts.com/css/yusei-magic" rel="stylesheet">'
    ]
    return template('templates/portfolio.html', heads=heads, t=time.time())

@route('/css/<file>')
def send_css(file):
    return static_file(file, root='static/css/')

@route('/css/mobile/<file>')
def send_css(file):
    return static_file(file, root='static/css/mobile/')

@route('/js/<file>')
def send_js(file):
    return static_file(file, root='static/js/')

@route('/img/<file>')
def send_js(file):
    return static_file(file, root='static/img/')

if __name__ == '__main__':
    from dotenv import load_dotenv
    load_dotenv()
    if os.getenv('DEBUG') == 'True':
        run(host='0.0.0.0', port=int(os.getenv('PORT', default=5000)), debug=True, reloader=True)
    else:
        run(host='0.0.0.0', port=int(os.getenv('PORT', default=5000)))
