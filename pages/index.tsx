import type { NextPage } from 'next'
import { IntroductionText } from '../components/IntroductionText/IntroductionText'
import { Layout } from '../components/Layout/Layout'
import { SocialMediaDesktop } from '../components/SocialMedia/SocialMediaDesktop';
import { Manifest } from './api/manifest';
import { SectionContainer } from '../styles'



const Home: NextPage = () => {
  return (
    <Layout>
       <SectionContainer>
          <SocialMediaDesktop/>
          <IntroductionText title={Manifest?.personalInfo?.title} text={Manifest?.personalInfo?.summary}/>
       </SectionContainer>
    </Layout>
  )
}

export default Home
