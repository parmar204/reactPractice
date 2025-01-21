import React, { useState } from 'react'

const Temperature = () => {

    const [inputValue, setInputValue] = useState("")
    const [inputScale, setInputScale] = useState('Celsius')

    const convertTemperature = (value, scale) => {
        if (value === '') return { Celsius: '', Fahrenheit: '', Kelvin: '' };

        const temp = parseFloat(inputValue)
        if (isNaN(temp)) return { Celsius: '', Fahrenheit: '', Kelvin: '' };

        switch (scale) {
            case 'Celsius':
                return {
                    Celsius: temp,
                    Fahrenheit: (temp * 9) / 5 + 32,
                    Kelvin: temp + 273.15,
                }
            case 'Fahrenheit': 
                return {
                    Celsius: (temp - 32) * 5 / 9,
                    Fahrenheit: temp,
                    Kelvin: (temp - 32) * 5 / 9 + 273.15,
                }
            case 'Kelvin':
                return {
                Celsius: temp - 273.15,
                Fahrenheit: (temp - 273.15) * 9 / 5 + 32,
                Kelvin: temp,
                };
            default:
                return { Celsius: '', Fahrenheit: '', Kelvin: '' };
        }
    }

    const conversions = convertTemperature(inputValue, inputScale);

  return (
    <div className='flex justify-center h-screen items-center'>
        <div className='sm:w-[500px] w-full bg-[#eee] p-3 shadow-md rounded-md'>
            <h2 className='text-[18px] text-center mb-3'>Temperature Converter</h2>
            <div className='flex gap-4 items-center mb-4'>
                <input type="text" className='w-full border p-2 rounded-md' onChange={e => setInputValue(e.target.value)} />
                <select className="border p-2 rounded-md" onChange={e => setInputScale(e.target.value)}>
                    <option value="Celsius">Celsius (°C)</option>
                    <option value="Fahrenheit">Fahrenheit (°F)</option>
                    <option value="Kelvin">Kelvin (K)</option>
                </select>
            </div>
            <div className='p-4 border rounded-md w-full max-w-sm'>
                <p><strong>Celsius:</strong>{conversions.Celsius !== '' ? conversions.Celsius.toFixed(2) : 'N/A'} °C</p>
                <p><strong>Fahrenheit:</strong> {conversions.Fahrenheit !== '' ? conversions.Fahrenheit.toFixed(2) : 'N/A'} °F</p>
                <p><strong>Kelvin:</strong> {conversions.Kelvin !== '' ? conversions.Kelvin.toFixed(2) : 'N/A'} K</p>
            </div>
        </div>
    </div>
  )
}

export default Temperature