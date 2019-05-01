import React from 'react'

export const ToEnter = props => {
  return (
    <div className={props.mobile ? 'icons-mobile' : 'icons'}>
      <img src='/assets/howToEnter/group-9@2x.png' className='instructions' />

      {!props.mobile ? <div className='enter'>How To Enter</div> : <div />}
      <div className='tiles'>
        {props.mobile ? <div className='enter'>How To Enter</div> : <div />}
        <div>
          <img src='/assets/howToEnter/vector-smart-object@2x.png' />
          <div className='title'>Capture It</div>
          <hr className='ruler' />
          <div className='bodyText'>
            Snap photos of a view of nature, landscapes, national or state
            parks, or wherever the great outdoors takes you.
          </div>
        </div>
        <div>
          <img src='/assets/howToEnter/vector-smart-object-1@2x.png' />
          <div className='title'>Share It</div>
          <hr className='ruler' />
          <div className='bodyText'>
            Upload your best images to Instagram from June 1 - June 30, 2016
            with #MyAwayContest and a caption that tells how you found it.
          </div>
        </div>
        <div>
          <img src='/assets/howToEnter/vector-smart-object@2x.png' />
          <div className='title'>Win It</div>
          <hr className='ruler' />
          <div className='bodyText'>
            Winner will be announced in mid August, so be sure to bookmark this
            page and check back in with us to view the grand prize-winning
            image!
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToEnter
