import React from 'react'
import Layout from '../components/layout'

const questions = [
  {
    questionText: 'Who is it for ?',
    answerText: `
    Recent college graduates, students taking gap year, dropouts, 
    professionals looking to switch careers, anyone learning web development 
    but needs right environment and guidance. No prior programming knowledge required.`,
  },
]

const QuestionCard = ({ questionText, answerText }) => (
  <div>
    <h3>{questionText}</h3>
    <p>{answerText}</p>
  </div>
)
export default () => <Layout>
    <article>
        {questions.map(q =><QuestionCard {...q} />)}
    </article>
</Layout>
