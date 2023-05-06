import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { subscribe } from "../../redux/user/slice";
import Style from "./style";
import { useNavigate } from "react-router-dom";

export function SubscriptionModal() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleSubscription(event) {
        event.preventDefault();
        dispatch(subscribe(name));
        navigate('/main-screen');
    };
    const [name, setName] = useState("");

    return (
        <Style.Modal >
            <h1>Welcome to CodeLeap network!</h1>
            <Style.SubscriptionForm isNameEmpty={(name === "")} onSubmit={handleSubscription}>
                <h3>Please enter your username</h3>
                <input value={name} type="text" placeholder="Ex: John doe" required onChange={(e) => setName(e.target.value)} />
                <button type='submit' disabled={((name === ""))}>ENTER</button>
            </Style.SubscriptionForm>
        </Style.Modal>
    );
};