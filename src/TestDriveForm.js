import React from 'react';
import './TestDriveForm.scss';

const TestDriveForm = () => {
    return (
        <section id='bmw-test-drive-form' className='bmw-test-drive-form'>
            <h3>UMÓW JAZDĘ PRÓBNĄ <sup>BMW iX</sup></h3>
            <p>Zachęcamy do ograniczenia poruszania się i pozostania w domu.</p>
            <p>Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie poniższego formularza.</p>
            <form>
                <p>Wypełnij formularz swoimi danymi.</p>
                <ul>
                    <li>
                        <input type='radio' id='male' name='sex' value='male' />
                        <label for='male'>Pan</label>
                        <input type='radio' id='female' name='sex' value='female' />
                        <label for='female'>Pani</label>
                    </li>
                    <li>
                        <input type='text' name='firstname' placeholder='Imię*' required />
                    </li>
                    <li>
                        <input type='text' name='surname' placeholder='Nazwisko*' required />
                    </li>
                    <li>
                        <input type='text' name='email' placeholder='E-mail*' required />
                    </li>
                    <li>
                        <input type='text' name='phone_number' placeholder='Numer telefonu*' required />
                    </li>
                    <li>
                        <input className='bmw-default-btn' type='submit' value='WYŚLIJ' />
                    </li>
                </ul>
            </form>
        </section>
    );
}

export default TestDriveForm;