import React from 'react';
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

const Homepage = () => {
  return (
      <div className='flex justify-center flex-col items-center h-screen px-2  text-white'>
          <div className='text-5xl font-bold mb-20'>ChatGPT</div>
          <div className='flex space-x-2 text-center'>
              <div>
                  <div className='flex justify-center flex-col items-center mb-5'>
                      {/* Sun Icon */}
                      <SunIcon className="h-8 w-8"/>
                      <h2>Examples</h2>
                  </div>
                  <div className='space-y-2'>
                      <p className='infoText'>Explain something for me</p>
                      <p className='infoText'>What's the difference between dog and cat</p>
                      <p className='infoText'>What's the color sun</p>
                  </div>
              </div>
              <div>
                  <div className='flex justify-center flex-col items-center mb-5'>
                      {/* Sun Icon */}
                      <BoltIcon className="h-8 w-8"/>
                      <h2>Capabilities</h2>
                  </div>
                  <div className='space-y-2'>
                      <p className='infoText'>Change ChatGPT Model to use</p>
                      <p className='infoText'>Messages are stored in Firebase's Firestore</p>
                      <p className='infoText'>
                          Hot Toast notification when ChatGPT is thinking!
                      </p>
                  </div>
              </div>
              <div>
                  <div className='flex justify-center flex-col items-center mb-5'>
                      {/* Sun Icon */}
                      <ExclamationTriangleIcon className="h-8 w-8"/>
                      <h2>Limitations</h2>
                  </div>
                  <div className='space-y-2'>
                      <p className='infoText'>May Occasionally generate incorrect information</p>
                      <p className='infoText'>May occasionally produce harmful instructions or baised content</p>
                      <p className='infoText'>Limited knowlegde of world and event after 2021</p>
                  </div>
              </div>
          </div>
   </div>
  )
}

export default Homepage;