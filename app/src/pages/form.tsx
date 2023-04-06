import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/layout";
import Background from "@/components/HomeBackground";
import anime from 'animejs'
import { Footer } from "@/components/footer";
import Button from "@/components/Button";

const Form = () => {
  const [feedback, setFeedback] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email) {
      setFeedback("Please enter your name and email");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setFeedback("Please enter a valid email address");
      return;
    }


    try {
      const response = await fetch('/api/dbHandler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });


      if (response.ok) {
        const data = await response.json();
        console.log(data);

        if (data.exists) {
          setFeedback(`User with email ${email} already exists`);
          console.log('Email already exists');
        } else {
          console.log('Form data saved successfully');

          // placeholder under we get a confirmation page
          // wait 2 seconds before redirecting
          setConfirmation('Form data saved successfully!');
          setTimeout(() => {
            setConfirmation('');
          }, 2000);


          // redirect to index
          window.location.href = '/';
        }
      } else {
        // TODO: handle error response
        console.error('Error saving form data');
      }
    } catch (error) {
      // TODO: handle network error
      console.error('Network error', error);
    }

    return;
  };


  const nameRef = useRef(null), emailRef = useRef(null), buttonRef = useRef(null);

  useEffect(() => {
    anime({
      targets: nameRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutElastic(1, .8)',
      duration: 1500,
    });

    anime({
      targets: emailRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutElastic(1, .8)',
      duration: 1500,
      delay: 500,
    });

    anime({
      targets: buttonRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutElastic(1, .8)',
      delay: 1000,
    });
  }, []);



  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center pb-4">
        <div className={`py-2`}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            ref={nameRef}
            className="px-4 py-2 rounded-lg border-gray-400 border-2 my-2"
          />
          <p ref={emailRef}></p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            ref={emailRef}
            className="px-4 py-2 rounded-lg border-gray-400 border-2 my-2"
          />
        </div>
        <button type="submit" ref={buttonRef} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>

      <p className="text-red-500">{feedback}</p>
      <p className="text-green-500">{confirmation}</p>
    </div>
  );
}

const Encap = () => {
  return (
    <Layout>
      <div className="relative w-full m-0 h-screen">
        <Background />
        <main className="relative w-full min-h-screen bg-transparent">
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-white text-center text-6xl font-black pb-8">
              Sign up for our newsletter
            </h1>

            <Form />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Encap;
