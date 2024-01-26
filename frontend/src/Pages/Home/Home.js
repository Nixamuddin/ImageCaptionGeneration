import React from 'react'
import './Home.css'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import caption from '../../Assets/imagecapton.png'
const Home = () => {
  return (
    <>
<section id='banner'>
    <div className="container">
        <div className="row">
            <div className="col-md-7 left-side">
                <h1 className='title-home ' data-aos="fade-up">Explore Caption Generation</h1>
                <h3>Unleash the Power of Words and Images</h3>
                <p className='paragraph-home' data-aos="fade-up"> Elevate your online experience with CaptionGeneration, your gateway to a world of possibilities. Our platform seamlessly combines cutting-edge technology with user-friendly features, bringing you a range of tools to enhance your digital life.</p>
            </div>
            <div className="col-md-4 right-side">
                <img src={image1} alt="" />
            </div>
        </div>
    </div>
</section>

<section className='technology'>
<h1 className='text-center title'>What We Do?</h1>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
<img src={caption} alt="" />
<h6> 📷 Image Caption Generation</h6>
<p>Create captivating and descriptive captions for your images effortlessly. Let your pictures tell a story. </p>
            </div>
            <div className="col-md-3">
<img src='voicetotext.png' alt="" />
<h6>🔊 Convert Voice To Text</h6>
<p>Transform spoken words into written text with precision and speed. Our voice-to-text feature simplifies communication.</p>
            </div>
            <div className="col-md-3">
<img src='translation.png' alt="" />
<h6>🌎 Translator</h6>
<p>Break down language barriers by translating text between different languages. Connect with a global audience effortlessly.</p>
            </div>
            <div className="col-md-3">
<img src='diary.jpg' alt="" />
<h6>📅 Personalized Diary</h6>
<p>Safeguard your thoughts and memories in a secure and private digital diary. Reflect on your journey.</p>
            </div>
        </div>
    </div>
</section>
<section className='our-mission'>
    <h1 className='text-center title'>Our Mission</h1>
    <div className="container">
        <div className="row offset=1">
            <div className="col-md-5">
                <h3 className='text-center'>what is our mission</h3>
                <ul>
                    <li>Generate captivating captions for your images effortlessly with CaptionGeneration.</li>
                    <li>Transform spoken words into written text seamlessly with our voice-to-text feature.</li>
                    <li>Break language barriers and connect globally with our quick language translation tool.</li>
                    <li>Safeguard your thoughts and memories in a secure and private digital diary on Caption Generation.</li>
                </ul>
            </div>
            <div className="col-md-5 our-mission_image">
                <img src={image2} alt="" />
            </div>
        </div>
    </div>
</section>
<section className='techstack'>
<h1 className='text-center title'>Technologies Stack</h1>

</section>
<section className='footer'>
<div className="container">
  <h1 className='text-center text-white py-3 mt-10'> All Rights Reserved &copy; Image Caption Generation</h1>
    </div>
</section>
    </>
  )
}

export default Home
