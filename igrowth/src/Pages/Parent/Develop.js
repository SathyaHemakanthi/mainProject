import React, { useState, useEffect } from "react";
import "./develop.css";

const Develop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update the state
    fetch("http://localhost:8081/development_activities")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleRadioChange = (event, index) => {
    const newData = [...data];
    newData[index].activity_status = event.target.value;
    setData(newData);
  };

  const handleSubmit = () => {
    // Send the updated data to the server
    fetch("http://localhost:8081/update_development_activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => { 
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.activity_id}</td>
              <td>{d.activity_name}</td>
              <td>
                <input
                  type="radio"
                  value="Yes"
                  checked={d.activity_status === "Yes"}
                  onChange={(e) => handleRadioChange(e, i)}
                />
                Yes
                <input
                  type="radio"
                  value="No"
                  checked={d.activity_status === "No"}
                  onChange={(e) => handleRadioChange(e, i)}
                />
                No
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  2.Not smiling back at you.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  3.Unale to keep the head straight.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  4.The mouth does not make small
                  sounds.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  5.Do not bring material to the mouth.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  6. When the feet are placed on a hard background, the body
                  does not push down.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  7.To move one eye or both eyes in all directions
                  can't.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>
            </div>
            <br />
            <br />
            <input className="btn-submit_2" type="submit" value="submit" />
            <br />
            <br />

            </div>

            </tbody>
            </table>

            <table className="custom-table">
              <tbody>
            
              <div className='develop_con'>
              <div className="deve_border">

            <label className="month2" htmlFor="">
              At 6 months of age:
            </label>
            <br />
            <tr className="question-row">
              <td>
                <label htmlFor="">
                  1.Does not attempt to obtain a material within
                  reach.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  2.Love does not show affection to
                  caregivers.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  3.Does not respond to surrounding
                  sounds.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  4.Difficulty bringing a substance to the
                  mouth.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  5.Does not make sounds with vowels like 'B', 'A',
                  'O'.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  6.Can't roll to one side.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  7.Don't laugh loudly or make loud
                  noises.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  8.The body feels very stiff, with unusual stiffness in the
                  muscles.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  9.The body feels numb and crumbling.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>
            </div>

            <br />
            <br />
            <input className="btn-submit" type="submit" value="submit" />
            <br />
            <br />

            </div>

            </tbody>
            </table>

            <table>
              <tbody>


            <label className="month2" htmlFor="">
              At 9 months of age:
            </label>
            <br />
            <tr className="question-row">
              <td>
                <label htmlFor="">
                  1.To support the weight of the body on the feet with help
                  can't.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  2.Unable to sit with help.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  3.Don't make sounds like 'mama', 'baba' and
                  'dada'.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  4.Do not play to respond to others.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  5.Does not respond to his name.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  6.Does not recognize familiar people.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  7.Does not look at what is being
                  shown.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  8.Do not switch toys from one hand to the
                  other.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>
            <br />
            <br />
            <input className="btn-submit" type="submit" value="submit" />
            <br />
            <br />

            <label className="month2" htmlFor="">
              At 12 months of age:
            </label>
            <br />
            <tr className="question-row">
              <td>
                <label htmlFor="">
                  1.Inability to move independently from one can to
                  another.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  2.You can't wait for help or support.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  3.What is hidden is not sought.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  4.Does not say single words like 'Mom' and
                  'Dad'.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  5.Actions such as hand waving and head nodding are not
                  performed.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  6.Extend and not show certain things.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  7.The index finger and big toe cannot pick up something small
                  (like grains of rice)..&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  8.It is thought that the previous abilities have been
                  lost.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <br />
            <br />
            <input className="btn-submit" type="submit" value="submit" />
            <br />
            <br />

            <label className="month2" htmlFor="">
              At 18 months of age (1.5 years):
            </label>
            <br />
            <tr className="question-row">
              <td>
                <label htmlFor="">
                  1.Fingers are not pointing at
                  something.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  2.Unable to walk.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  3.Not knowing what familiar materials are used
                  for.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  4.Do not imitate others.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  5.Does not appear to be learning new
                  words.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  6.Does not use at least 6 words.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  7.Parents don't care when they leave or come
                  around.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  8.You feel that some of the abilities you had until now are
                  disappearing.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <br />
            <br />
            <input className="btn-submit" type="submit" value="submit" />
            <br />
            <br />

            <label className="month2" htmlFor="">
              At the age of 24 months(2 years):
            </label>
            <br />
            <tr className="question-row">
              <td>
                <label htmlFor="">
                  1.Cannot walk well alone.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  2.Can't say a 2 word sentence.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  3.It is not known what the common items such as brush,
                  telephone, spoon are used for.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  4.Actions and words do not imitate.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  5.Failure to obey simple commands.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  6.Previous skills are lost.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <br />
            <br />
            <input className="btn-submit" type="submit" value="submit" />
            <br />
            <br />

            <label className="month2" htmlFor="">
              At the age of 36 months(3 years):
            </label>
            <br />
            <tr className="question-row">
              <td>
                <label htmlFor="">
                  1.Frequent falls and difficulty climbing
                  stairs.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  1.Frequent falls and difficulty climbing
                  stairs.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  2.Drooling or slurring speech.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  3.Can't play with sports equipment very
                  simply.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  4.Sentences do not speak.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  5.Does not understand a simple
                  command.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  6.Feeding the toy doll by imitation.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  7.Do not play with toys or other
                  children.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  8.Eye to eye does not see eye to eye.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  9.The former abilities are lost.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <br />
            <br />
            <input className="btn-submit" type="submit" value="submit" />
            <br />
            <br />

            <label className="month2" htmlFor="">
              At the age of 48 months(4 years):
            </label>
            <br />
            <tr className="question-row">
              <td>
                <label htmlFor="">
                  1.Can't jump up.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  2.It is not possible to streak a leaf.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  3.Does not like participating in games with
                  others.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  4.Counts other children and outsiders.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  5.Does not like to do everyday activities like dressing,
                  sleeping, using the toilet.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  6.Does not declare that he needs to go to the toilet even in
                  the afternoon.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  7. A well-known favorite short story,It's hard to
                  repeat.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  8.Can't follow a 3-step command.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  9.Difficult to understand sameness or
                  difference.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  10.The words 'I' and 'you' are not used
                  correctly.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  11.It is difficult for the hands to understand what is being
                  said.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  12.The former abilities are lost.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <br />
            <br />
            <input className="btn-submit" type="submit" value="submit" />
            <br />
            <br />

            <label className="month2" htmlFor="">
              At the age of 60 months(5 years):
            </label>
            <br />
            <tr className="question-row">
              <td>
                <label htmlFor="">
                  1.Different types of impulses show
                  loss.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  2.Shows impulsive behavior. (eg excessive fear, excessive
                  anger,fear, shyness)&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  3.Is unusually withdrawn from others and less
                  active.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  4. Easily distracted. And no more than 5 minutes of attention
                  is given to any one activity&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  5.Not responsive to others.Responds only
                  superficially.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  6.Authentic and imitation cannot be
                  distinguished.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  7.It is not possible to declare one's first name and
                  surname.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  8.Does not use plural, past tense verbs
                  correctly.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  9.Does not talk about everyday activities and
                  experiences.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  10.Cannot draw images.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <tr className="question-row">
              <td>
                <label htmlFor="">
                  11.The former abilities are lost.&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
              </td>
              <td>
                <input
                  type="checkbox"
                  className="result"
                  value="Yes1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="checkbox"
                  className="result"
                  value="No1"
                  onChange={handleChange}
                />
                <label htmlFor="">&nbsp;No</label>
              </td>
            </tr>

            <br />
            <br />
            <input className="btn-submit" type="submit" value="submit" />
            <br />
            <br />
          </tbody>
        </table>

        {/* <br />
        <br />
        <input type="submit" value="submit" /> */}
      </form>
    </div>
  );
};
export default Develop;

