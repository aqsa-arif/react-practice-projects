import { useContext, useRef, useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { ChallengesContext } from '../store/challenges-context.jsx';
import Modal from './Modal.jsx';
import images from '../assets/images.js';

export default function NewChallenge({ onDone }) {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  const [scope, animate] = useAnimate();

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      animate('input, textarea', {
        x: [-10, 0, 10, 0]
      },{
        type: 'spring', duration: .2, delay: stagger(.05)
      })
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <div title="New Challenge" 
      style={{
        background: '#fff',
        paddingTop: '20px',
        width: '35rem',
        margin: 'auto',
        marginTop: '50px',
      }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <form id="new-challenge" onSubmit={handleSubmit} ref={scope}>
        <p>
          <label htmlFor="title">Title</label>
          <input ref={title} type="text" name="title" id="title" />
        </p>

        <p>
          <label htmlFor="description">Description</label>
          <textarea ref={description} name="description" id="description" />
        </p>

        <p>
          <label htmlFor="deadline">Deadline</label>
          <input ref={deadline} type="date" name="deadline" id="deadline" />
        </p>

        <motion.ul id="new-challenge-images" 
          variants={{
            visible: {
              transition: { staggerChildren: .25 }
            }
          }}
        >
          {images.map((image) => (
            <motion.li 
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: [0.8, 1.3, 1] },
              }} 
              initial='hidden'
              animate='visible'
              exit={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring' }}
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? 'selected' : undefined}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

        <p className="new-challenge-actions">
          <button type="button" onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    // </div>
  );
}
