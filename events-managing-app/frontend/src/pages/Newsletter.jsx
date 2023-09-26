import React from 'react'
import PageContent from '../components/PageContent'
import NewsletterSignup from '../components/NewsletterSignup'

const Newsletter = () => {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  )
}

export default Newsletter


export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  console.log(email);
  return { message: 'Signup sucessful' }
}
