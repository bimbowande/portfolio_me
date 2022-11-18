import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/Layout/Layout';
import { PageHeader } from '../common/Project/styles';
import { ContactBtn, InputGroup, PageSection } from '../common/Contact/style';
import { Input } from '../common/Contact/Input';
import { ButtonContainer } from '../common/Resume/Styles';

 const Contact: NextPage = () => {

  const [emailContent, updateContent] = useState({name:'',email:'',message:''})

  const handleChange = (event:any) => {
    updateContent({ ...emailContent, [event.target.name]: event.target.value });
  };

  return (
    <Layout>
        <div>
            <PageHeader>{`{`} Contact {`}`}</PageHeader>
            <PageSection>
              <InputGroup>
                <Input changeValue={(e:any)=>handleChange(e)}  inputName='name' placeholder='Enter Name'/>
              </InputGroup>
              <InputGroup>
                <Input changeValue={(e:any)=>handleChange(e)} inputName='email' placeholder='Enter Email address'/>
              </InputGroup>
              <InputGroup>
                <Input changeValue={(e:any)=>handleChange(e)} inputName='message' boxType='textArea' placeholder="Hi Bimbo, Nice Portfolio I'll like to discuss... "/>
              </InputGroup>
              <ButtonContainer>
                 <ContactBtn>Send Message</ContactBtn>
              </ButtonContainer>
            </PageSection>
        </div>
    </Layout>
  )
}

export default Contact