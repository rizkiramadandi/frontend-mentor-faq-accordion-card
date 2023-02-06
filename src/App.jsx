import { useState } from 'react'

function App() {
  const [faqs, setFaqs] = useState([
    { question: `How many team members can I invite?`, answer: `You can invite up to 2 additional users on the Free plan. There is no limit on 
    team members for the Premium plan.` },
    { question: `What is the maximum file upload size?`, answer: `No more than 2GB. All files in your account must fit your allotted storage space.` },
    { question: `How do I reset my password?`, answer: `Click “Forgot password” from the login page or “Change password” from your profile page.
    A reset link will be emailed to you.` },
    { question: `Can I cancel my subscription?`, answer: `Yes! Send us a message and we’ll process your request no questions asked.` },
    { question: `Do you provide additional support?`, answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.` },
  ])

  const [active, setActive] = useState(null)
  
  return (
    <div>
      <div className='container'>
        <div className='illustration'>
          <div id='desktop'>
            <div className='woman-container'>
              <div className="woman">
                <img src="./images/illustration-woman-online-desktop.svg" alt="Desktop illustration" />
              </div>
            </div>
            <div className='box'>
              <img src="./images/illustration-box-desktop.svg" alt="Box Desktop Illustration" />
            </div>
          </div>
          <div id='mobile'>
            <div className="woman">
              <img src="./images/illustration-woman-online-mobile.svg" alt="Mobile illustration" />
            </div>
          </div>
        </div>
        <div className='faq'>
          <h1 className='faq-title'>FAQ</h1>
          <div>
            {faqs.map((faq, idx) => {
              return (
                <>
                  <div className={active === idx ? 'question active':'question'} onClick={() => active === idx ? setActive(null) : setActive(idx)}>
                    <span>
                      { faq.question }
                    </span>
                    <span>
                      <img src="./images/icon-arrow-down.svg" alt="Toggle" />
                    </span>
                  </div>
                  <div className={active === idx ? 'answer active':'answer'}>{ faq.answer }</div>
                  <hr />
                </>
              )
            })}
          </div>
        </div>
      </div>

      <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://www.frontendmentor.io/profile/rizkiramadandi">Rizki Ramadandi</a>.
        </div>
      </footer>
    </div>
  )
}

export default App
