import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState("");
  const [word, setWord] = useState("");
  const [name, setName] = useState("Mario");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, word, name} ;
    setIsLoading(true);
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
      setIsLoading(false)
      navigate('/')
    })
  }



  return (
    <div className="createcontent">
      <h2> Create A new Content </h2>
      <form onSubmit={handleSubmit}>
        <label> Blog Title </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label> Blog Body </label>
        <textarea
          value={word}
          onChange={(e) => setWord(e.target.value)}
        ></textarea>

        <label> Blog Author </label>
        <select value={name} onChange={(e) => setName(e.target.value)}>
          <option value="Will"> Will </option>
          <option value="Osibs"> Osibs </option>
        </select>

        { !isLoading && <button> Add Blog </button>}
        { isLoading && <button> Adding Blog... </button>}

      </form>
    </div>
  );
};

export default Create;