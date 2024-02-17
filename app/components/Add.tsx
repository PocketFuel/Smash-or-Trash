import React, { useState } from 'react';
import { useCompetitor } from '../hooks/useCompetitor';
import { v4 as uuidv4 } from 'uuid'; // Make sure to install uuid with npm or yarn

const Add = () => {
  const [imagePreview, setImagePreview] = useState('');
  const [competitorName, setCompetitorName] = useState(''); // State for competitor's name
  const { addCompetitor } = useCompetitor();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCompetitor = {
      id: uuidv4(), // Generate a unique ID
      name: competitorName, // Use the input from the form
      imgSrc: imagePreview,
      votes: 0,
      voteForCompetitor: () => {},
      rank: 0,
      booted: false,
      onReady: () => {},
      tags: [],
    };
    addCompetitor(newCompetitor); // Use the addCompetitor function here
    // Reset form fields after submission
    setImagePreview('');
    setCompetitorName('');
  };

  return (
    <div className="flex flex-col relative w-full md:max-w-3xl mx-auto h-full items-center" id="add">
      <div id="new-competitor" className="w-full md:max-w-5xl text-white h-full bg-eclipse bottom-0 font-bold shadow-lg border-2 border-night rounded-xl px-4 pb-1 pt-1">
        <form id="player-form" className="flex flex-col text-night w-full mx-auto py-3" onSubmit={handleSubmit}>
          <label id="display-name" className="block text-md font-bold leading-6 pb-2 text-day">Display Name</label>
          <input
            type="text"
            placeholder="Competitor Name"
            value={competitorName}
            onChange={(e) => setCompetitorName(e.target.value)}
            className="relative cursor-pointer rounded-md bg-darkestnight text-day border py-2 border-night font-semibold px-2 focus:bg-eclipse focus-within:outline-none focus-within:ring-2 focus-within:ring-mist focus-within:ring-offset-2 focus-within:ring-offset-gray-900"
          />
          {/* Other form content */}
            <label id="cover-photo" className="block text-md font-bold leading-6 pb-2 mt-4 text-day">Upload your submission</label>
            <div className="mt-2 relative flex justify-center rounded-lg border border-dashed border-yellow-300 py-10">
                <div className="text-center">
                <svg className="mx-auto h-12 w-12 text-day/50" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                </svg>
                <div className="mt-4 flex text-sm leading-6 text-black">
                    <label id="file-upload" className="relative cursor-pointer rounded-md bg-darkestnight border border-night font-semibold px-2 text-mist focus-within:outline-none focus-within:ring-2 focus-within:ring-day focus-within:ring-offset-2 focus-within:ring-offset-gray-900 text-mist hover:text-day">
                    <span className="py-2 px-1 mt-3">Upload a file</span>
                    <input id="file-upload" required name="file-upload" type="file" className="sr-only w-full" onChange={handleFileChange}></input>
                    </label>
                    <p className="pl-1 text-day">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-day mt-2">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
          <button className="w-full text-black bg-mist font-bold shadow-lg border-2 mt-3 border-yellow-300 rounded-xl p-2 hover:bg-grime hover:border-primary hover:text-white" type="submit">Add Player</button>
        </form>
        <img className="object-fit text-day mb-2 rounded-xl" id="preview" src={imagePreview || '#'} alt="Image preview" style={{display: imagePreview ? 'block' : 'none'}} />
      </div>
    </div>
  );
};

export default Add;