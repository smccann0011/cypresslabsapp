import React, {useState} from 'react';

import {Authenticator, withAuthenticator } from '@aws-amplify/ui-react'

import {API} from 'aws-amplify';

const heading = {fontSize: 44, fontWeight: 300, marginBottom: 5}

function Crypto() {
    const [coins, updateCoins] = useState([])
    const [input, updateInput] = useState({limit: 5, start: 0})

    function updateInputValues(type, value) {
        updateInput({ ...input, [type]: value})
    }

    async function fetchCoins() {
        const {limit, start} = input
        const data = await API.get('cryptoapi', `/coins?limit=${limit}&start=${start}`)
        updateCoins(data.coins)
    }

    //useEffect( () => {
    //    fetchCoins()
    //})

    return (
        <Authenticator>
        {({ signOut, user }) => (
            <div className="Crypto">
                <h2 style={heading}>Crypto Agent</h2>
                <div>
                    <div>
                        <input placeholder="limit" onChange={e => updateInputValues('limit', e.target.value)}/>
                        <input placeholder="start" onChange={e => updateInputValues('start', e.target.value)}/>
                        <button onClick={fetchCoins}>Fetch Coins</button>
                    </div>
                
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Price</th>
                            <th scope="col" align='right'>Market Cap</th>
                            <th scope="col" align='right'>1 hr</th>
                            <th scope="col" align='right'>24 hr</th>
                            <th scope="col" align='right'>7 day</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        coins.map((coin, index) => (
                            <tr key={index}>
                                <td>{coin.name}</td>
                                <td>{coin.symbol}</td>
                                <td>{coin.price_usd}</td>
                                <td align='right'>{coin.market_cap_usd}</td>
                                <td align='right'>{coin.percent_change_1h}%</td>
                                <td align='right'>{coin.percent_change_24h}%</td>
                                <td align='right'>{coin.percent_change_7d}%</td>
                            </tr>
                        ))
                    }
                    </tbody>
                    </table>
                </div>
            </div>
        )}
        </Authenticator>
    )
}

export default withAuthenticator(Crypto)
