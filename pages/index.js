import React, {useState, useEffect} from "react";
import Head from "next/head";
import {useForm} from "react-hook-form";
import Poem from "../components/Poem";
import styles from "../styles/Home.module.css";
import Questions from "../components/Questions";

const totalQuestions = Array.from({length: 8});
export default function Home() {
  const form = useForm();
  const {register, getValues} = form;
  const [showPoem, setShowPoem] = useState(false);
  const [question, setQuestion] = useState(0);

  const next = () => {
    if (question < 7) {
      if (getValues("question")[question].value) {
        setQuestion(question + 1);
      }
    } else {
      setShowPoem(true);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Pakjesavond</title>
        <meta name="description" content="Pakjesavond" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!showPoem && (
          <form className={styles.form}>
            <div>
              <Questions
                current={question}
                form={form}
                totalQuestions={totalQuestions}
              />
            </div>
            <button
              type="button"
              onClick={() => next()}
              className={styles.next}
            >
              {question < 7 ? "Volgende vraag" : "Naar gedicht"}
            </button>
          </form>
        )}
        {showPoem && <Poem values={getValues("question")} />}
      </main>
    </div>
  );
}
