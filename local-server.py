import http.server
import os
import urllib.parse

ROOT = os.path.dirname(os.path.abspath(__file__))

class VercelLikeHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        path = path.split('?', 1)[0].split('#', 1)[0]
        path = urllib.parse.unquote(path)

        # Vercel-like rewrites
        if path.startswith('/PICTURE/'):
            path = '/ASSETS' + path
        elif path.startswith('/VISUAL-LIBRARY/'):
            path = '/ASSETS' + path
        elif path == '/':
            path = '/index.html'
        elif path.startswith('/SCIENCE/KNOWLEDGE/'):
            rest = path[len('/SCIENCE/KNOWLEDGE/'):]
            if rest.endswith('/') or '.' not in rest:
                path = '/WEBSITE/pages/SCIENCE/KNOWLEDGE/' + rest
                if rest.endswith('/'):
                    path += 'index.html'
            else:
                path = '/WEBSITE/pages/SCIENCE/KNOWLEDGE/' + rest
        elif path.startswith('/SCIENCE/'):
            path = '/WEBSITE/pages' + path
        elif path.startswith('/ABOUT/'):
            path = '/WEBSITE/pages' + path
        elif path.startswith('/CONTACT/'):
            path = '/WEBSITE/pages' + path
        elif path.startswith('/NEWS/'):
            path = '/WEBSITE/pages' + path
        elif path.startswith('/PRODUCTS/'):
            path = '/WEBSITE/pages' + path
        elif path.startswith('/technology/'):
            path = '/WEBSITE/pages' + path
        elif path.startswith('/applications'):
            path = '/WEBSITE/pages/applications.html'
        elif path.startswith('/partnership'):
            path = '/WEBSITE/pages/partnership.html'
        else:
            path = '/WEBSITE' + path

        return os.path.join(ROOT, path.lstrip('/'))

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    PORT = 8000
    server = http.server.HTTPServer(('', PORT), VercelLikeHandler)
    print(f'Serving on http://127.0.0.1:{PORT}')
    print(f'Root: {ROOT}')
    server.serve_forever()
