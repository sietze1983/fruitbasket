import {useState} from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {

    const [countAardbei, setCountAardbei] = useState(0)
    const [countBanaan, setCountBanaan] = useState(0)
    const [countAppels, setCountAppels] = useState(0)
    const [countKiwi, setCountKiwi] = useState(0)
    const [termsAndConditionsValue, toggleTermsAndConditionsValue] = useState(false)
    const [messageValue, setMessageValue] = useState()
    const
        {register,
         handleSubmit,
         formState: {errors},
        } = useForm()

    function logSubmit(data){
        console.log("Data uit form", data)
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <fieldset>
        <label> {countAardbei} 🍓 Aardbeien</label>
        <button onClick={() => setCountAardbei(countAardbei-1)}>-</button>
        <button onClick={() => setCountAardbei(countAardbei+1)}>+</button>
        </fieldset>
        <fieldset>
        <label> {countBanaan} 🍌 Bananen</label>
        <button onClick={() => setCountBanaan(countBanaan-1)}>-</button>
        <button onClick={() => setCountBanaan(countBanaan+1)}>+</button>
        </fieldset>
        <fieldset>
        <label> {countAppels} 🍏 Appels</label>
        <button onClick={() => setCountAppels(countAppels-1)}>-</button>
        <button onClick={() => setCountAppels(countAppels+1)}>+</button>
        </fieldset>
        <fieldset>
        <label> {countKiwi} 🥝 Kiwi's</label>
        <button onClick={() => setCountKiwi(countKiwi-1)}>-</button>
        <button onClick={() => setCountKiwi(countKiwi+1)}>+</button>
        </fieldset>
        //Ik heb heel, heel veel uren op google gezeten voor een antwoord op de reset button... Deze laat ik even open.
        <br/>
        <br/>

        <div className="App">
            <header className="App-header">
                <form className="App-header" onSubmit={handleSubmit(logSubmit)}>
                    <label htmlFor="name">Voornaam</label>
                    <input type="text"
                           name="name"
                           id="name"
                           {...register("name", {
                               required: { value: true, message: "Dit veld is verplicht" }
                           })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <label htmlFor="surname">Achternaam</label>
                    <input type="text"
                           name="surname"
                           id="surname"
                           {...register("surname",{
                               required: { value: true, message: "Dit veld is verplicht" }
                           })}
                    />
                    {errors.surname && <p>{errors.surname.message}</p>}
                    <label htmlFor="age">Leeftijd</label>
                    <input type="number"
                           name="age"
                           id="age"
                           {...register("age")}
                    />
                    //Helaas kom ik er niet uit hoe ik de foutmelding op 18 jaar en ouder moet zetten. Hier ben ik echt een aantal uur mee bezig geweest, maar het lukt me helaas niet

                    <label htmlFor="zipcode">Postcode</label>
                    <input type="zipcode"
                           name="zipcode"
                           id="zipcode"
                           {...register("zipcode", {
                               required: { value: true, message: "Dit veld is verplicht" },
                               pattern: { value: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/im,
                               message: "Niet geldige postcode" }
                           },
                           )}
                    />
                    {errors.zipcode && <p>{errors.zipcode.message}</p>}
                    <br/>

                    <label htmlFor="form-frequency">
                        Bezorgfrequentie
                        <input type="radio"
                        id="form-frequency"
                        name="iedere-dag"/>
                        Iedere dag
                        <input type="radio"
                        id="form-frequency"
                        name="om-de-week"/>
                        Om de week
                        <input type="radio"
                        id="form-frequency"
                        name="iedere-maand"/>
                        Iedere maand
                        <input type="radio"
                        id="form-frequency"
                        name="anders"/>
                        Anders
                    </label>


                    <label htmlFor="form-message">
                        Opmerking
                        <input type="text"
                        id="form-message"
                        name="message"
                        value={messageValue}
                        onChange={(event) => setMessageValue(event.target.value)}/>
                    </label>

                    <br/>
                    <label htmlFor="form-terms-and-conditions">
                        <input type="checkbox"
                        id="form-terms-and-conditions"
                        name="terms-and-conditions"
                        checked={termsAndConditionsValue}
                        onChange={() => toggleTermsAndConditionsValue(!termsAndConditionsValue)}/>
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <br/>
                    <input type="submit"
                           disabled={errors.name || errors.surname || errors.zipcode}
                    />


                </form>
            </header>
        </div>
    </>
  );
}

export default App;




