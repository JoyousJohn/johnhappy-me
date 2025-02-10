from bottle import route, run, template, static_file, SimpleTemplate
import os, time

@route('/')
def index():
    return template('templates/index.html', t=time.time())

@route('/contact')
def transcript():
    return template('templates/contact.html', t=time.time())

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
