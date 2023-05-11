import React, {useState, useEffect, useRef} from 'react';
import {animated, config, useSprings} from '@react-spring/web';

import './styles.css';

interface JackpotProps {
    amount?: number;
    length?: number;
}

const numberTotal = 20;
const pi = 100 / numberTotal;

const BearJackpot = ({
    amount = 0,
    length = 5,
}: JackpotProps) => {
    const defaultValue = Array(length).fill('0');

    const targetDigits = amount.toString().padStart(length, '0').split('');
    const [digits, setDigits] = useState<number[]>(amount === 0 ? targetDigits: defaultValue);

    const [springs, api] = useSprings(
        digits.length,
        (index) => {
            const target = Number(targetDigits[index]);
            const isRollBack = target < digits[index];
            const toValue = isRollBack ? target + 10 : target;

            return {
                from: { transform: `translateY(-${digits[index] * pi}%)` },
                to: { transform: `translateY(-${toValue * pi}%)` },
                config: { ...config.molasses, duration: 600 * (digits.length - index) },
                reset: false,
                onRest: () => {
                    if(isRollBack){
                        api.set((setIndex) => {
                            if(index === setIndex){
                                return {
                                    transform: `translateY(-${(toValue - 10) * pi}%)`
                                }
                            }
                        })
                    }
                }
            }
        },
        [amount],
    );

    useEffect(() => {
        setDigits(targetDigits.map(Number));
    }, [amount]);

    return (
        <div>
            <div className="jackpot">
                {springs.map((props, index) => (
                    <animated.div key={index} style={props}>
                        {[...Array(numberTotal)].map((_, i) => {
                            const num = i >= 10 ? i - 10: i;
                            return (
                                <div key={i} className={digits[index] === i ? 'active' : ''}>
                                    {num}
                                </div>
                            )
                        })}
                    </animated.div>
                ))}
            </div>
        </div>
    );
};

export default BearJackpot;
