import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';   
import TanstackProvider from '@components/TanstackProvider';


export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
}

export default function RootLayout({ children }) { 

  return (
    <html lang="en">
      <body>
        <Provider>
          <TanstackProvider>
            <main className='main-padding'>
              <Nav />
              {children}
            </main>
          </TanstackProvider>
        </Provider>
      </body>
    </html>
  )
}
