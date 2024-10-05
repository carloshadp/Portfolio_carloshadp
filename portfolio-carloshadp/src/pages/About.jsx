import Form from "../components/Fomulario - About Page/Form"
export default function About() {
  return (
    <>
    <section className="bg-cinzento text-white flex flex-col items-center h-screen gap-8 desktop:flex-row desktop:justify-center">
      <div className="flex flex-col justify-center">
        <h1 className="place-self-center">About</h1>
        <p className="flex items-center">My name is Carlos, I am 18 years old, and I<br/>am currentlystudying Software Engineering.<br/>I consider myself a very disciplined person<br/>when it comes to studying andlearning. I<br/>am communicative, proactive, responsible,<br/>and always eager to learn. I am looking for<br/>an opportunity to enter the job market to<br/>grow professionally and enhance my skills.</p>

      </div>



    
      <Form/>

    </section>
    </>
  )
}
