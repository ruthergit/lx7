import React from 'react'

const footer = () => {
  return (<>
    
    <footer className="footer bg-BlackBG text-neutral-content px-56 py-10 font-Montserrat">
      <aside>
        <img className='w-[70px] pb-1' src="/pics/LX7-PNG-Logo.png" alt="" />
        <p>
          Lx7 Lights and Sounds
          <br />
          Copyright © 2025  
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Contacts</h6>
        <div className="grid grid-flow-row gap-4">
          <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=61552026773558' className='flex flex-row gap-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
              <p>Lx7 lights & Sounds</p>
            </a>
            <a className='flex flex-row gap-2'>
              <img className='w-[22px] ml-0' src="/pics/call.png" alt="" />
            <p>0976 007 5754</p>
          </a>
        </div>
      </nav>
  </footer>
  </>
  )
}

export default footer
