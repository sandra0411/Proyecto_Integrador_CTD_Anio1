import React, {useEffect, useState, useContext} from 'react';
import styles from '../../styles/admin_new_product/productNewPoliciesStyle.module.css';
import style from "../../styles/reservation_detail/reservationTime.module.css"
import { RiDeleteBin2Line } from "react-icons/ri";
import Context from '../../context/userContext';

export default function NewPolicies({handlePoliciesRules, handlePoliciesHealth, handlePoliciesCancellation}) {

    const houseRulesURL = "http://18.190.58.41:8080/policyhouserules/list";
    const healthURL = "http://18.190.58.41:8080/policyhealthandsecurity/list";
    const cancellationURL = "http://18.190.58.41:8080/cancellationpolicy/list";

    const { jwt } = useContext(Context);
    let bearer = jwt

    const [houseNorms, setHouseNorms] = useState([]);

    const [healthAndSafetyNorms, setHealthAndSafetyNorms] = useState([])

    const [cancelationNorms, setCancelationNorms] = useState([])

    useEffect(() => {
        fetch(houseRulesURL, {method: 'GET', headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${bearer}`,
            }})
        .then(response => {
            if (response.ok) {
              return response.json();
            } 
          })
        .then(houseRules => {
            setHouseNorms(houseRules) 
        })
    }, [])

    useEffect(() => {
        fetch(healthURL, {method: "GET", headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${bearer}`,
            }})
        .then(response => {
            if (response.ok) {
              return response.json();
            } 
          })
        .then(HealthAndSafetyNorms => {
            setHealthAndSafetyNorms(HealthAndSafetyNorms)    
        })
    }, [healthURL])

    useEffect(() => {
        fetch(cancellationURL, {method: "GET", headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${bearer}`,
            }})
        .then(response => {
            if (response.ok) {
              return response.json();
            } 
          })
        .then(CancelationNorms => {
            setCancelationNorms(CancelationNorms)    
        })
    }, [cancellationURL])
    
    const [policyRules, setPolicyRules] = useState("");
    const [policyHealth, setPolicyHealth] = useState("");
    const [policyCancellation, setPolicyCancellation] = useState("");

    const [listRules, setListRules] = useState([]);
    const [listHealth, setListHealth] = useState([]);
    const [listCancellation, setListCancellation] = useState([]);

    const handleDeleteRules = () => {
        fetch(`http://18.190.58.41:8080/policyhouserules/${policyRules}`, {method : "DELETE", headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${bearer}`,
            }
        })
        .then(response => {
            if(response.ok) {
                return(response.json())
            }
        })
        .then(
            setListRules(listRules.filter(policy => policy !== policyRules))
        )
    }

    const handleDeleteHealth = () => {
        fetch(`http://18.190.58.41:8080/policyhouserules/${policyHealth}`, {method : "DELETE", headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${bearer}`,
            }
        })
        .then(response => {
            if(response.ok) {
                return(response.json())
            }
        })
        .then(
            setListHealth(listHealth.filter(policy => policy !== policyHealth))
        )
    }

    const handleDeleteCancellation = () => {
        fetch(`http://18.190.58.41:8080/policyhouserules/${policyCancellation}`, {method : "DELETE", headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${bearer}`,
            }
        })
        .then(response => {
            if(response.ok) {
                return(response.json())
            }
        })
        .then(
            setListCancellation(listCancellation.filter(policy => policy !== policyCancellation))
        )
    }

    const handleChangeRules = (event) => {
        setPolicyRules(event.target.value)
    }

    const handleClickRules = () => {
        setListRules(listRules.concat(<div className={styles.add_policies}>
            <div className={styles.add_policies}>
                <label >
                    <input type="checkbox" onChange={handlePoliciesRules} name="features" value={policyRules} className={styles.checkbok_policies}/>
                    {policyRules}
                </label>
            </div>
            <a onClick={handleDeleteRules}>
                <RiDeleteBin2Line id={styles.delete_icon}/>
            </a>
        </div>))
    fetch("http://18.190.58.41:8080/policyhouserules",{method: "POST", headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${bearer}`,
        }, body: JSON.stringify({
            descriptionHouseRules : policyRules
        })
    })
    }

    const handleChangeHealth = (event) => {
        setPolicyHealth(event.target.value)
    }

    const handleClickHealth = () => {
        
        setListHealth(listHealth.concat(<div className={styles.add_policies}>
            <div className={styles.add_policies}>
                <label >
                    <input type="checkbox" onChange={handlePoliciesHealth} name="features" value={policyHealth} className={styles.checkbok_policies}/>
                    {policyHealth}
                </label>
            </div>
            <a onClick={handleDeleteHealth}>
                <RiDeleteBin2Line id={styles.delete_icon}/>
            </a>
        </div>))
    fetch("http://18.190.58.41:8080/policyhealthandsecurity",{method: "POST", headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${bearer}`,
        }, body: JSON.stringify({
            descriptionHealthAndSecurity: policyHealth
        })
    })
    }
    
    const handleChangeCancellation = (event) => {
        setPolicyCancellation(event.target.value)
    }

    const handleClickCancellation = () => {
        setListCancellation(listCancellation.concat(<div className={styles.add_policies}>
            <div className={styles.add_policies}>
                <label >
                    <input type="checkbox" onChange={handlePoliciesCancellation} name="features" value={policyCancellation} className={styles.checkbok_policies}/>
                    {policyCancellation}
                </label>
            </div>
            <a onClick={handleDeleteCancellation}>
                <RiDeleteBin2Line id={styles.delete_icon}/>
            </a>
        </div>))
    fetch("http://18.190.58.41:8080/cancellationpolicy",{method: "POST", headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${bearer}`,
        }, body: JSON.stringify({
            description: policyCancellation
        })
    })
    }
    
    return (<div id={styles.container_new_policies}>
        <h2>Políticas del producto</h2>
        <div>
            <div>
                <div>
                    <div>
                        <h3>Normas de la casa</h3>
                        <h5>Descripción</h5>
                    </div>
                    <div className={style.select}>
                        {houseNorms.map(function (norm) {
                            return (
                                <div className={styles.add_policies}>
                                    <label >
                                        <input type="checkbox" onChange={handlePoliciesRules} name="features" value={norm.descriptionHouseRules} className={styles.checkbok_policies}/>
                                        {norm.descriptionHouseRules}
                                    </label>
                                </div>
                            )
                        })}
                        {listRules}
                    </div>
                </div>
                
                <div>
                    <h5>Puede ingresar una descripción nueva aquí:</h5>
                    <div className={styles.add_policies}>
                        <textarea onChange={handleChangeRules} name="rules_description" id="rules_description0" placeholder="Escribir aquí"></textarea>
                        <button onClick={handleClickRules} className={styles.button_add_policies}>+</button>
                    </div>
                </div>
                
                
            </div>
            <div>
                <div>
                    <div>
                        <h3>Salud y seguridad</h3>
                        <h5>Descripción</h5>
                    </div>
                    <div className={style.select}>
                        {healthAndSafetyNorms.map(function (norm) {
                            return (
                                <div>
                                    <label>
                                        <input type="checkbox" onChange={handlePoliciesHealth} name="features" value={norm.descriptionHealthAndSecurity} className={styles.checkbok_policies} />
                                        {norm.descriptionHealthAndSecurity}
                                    </label>
                                </div>
                            )
                        })}
                        {listHealth}
                    </div>
                </div>

                <div>
                    <h5>Puede ingresar una descripción nueva aquí:</h5>
                    <div className={styles.add_policies}>
                        <textarea onChange={handleChangeHealth} name="health_description" id="health_description" placeholder="Escribir aquí"></textarea>
                        <button onClick={handleClickHealth} className={styles.button_add_policies}>+</button>
                    </div>
                </div>

                
            </div>
            <div>
                <div>
                    <div>
                        <h3>Política de cancelación</h3>
                        <h5>Descripción</h5>
                    </div>
                    <div className={style.select}>
                        {cancelationNorms.map(function (norm) {
                            return (
                                <div >
                                    <label >
                                        <input type="checkbox" onChange={handlePoliciesCancellation} name="features" value={norm.description} className={styles.checkbok_policies}/>
                                        {norm.description}
                                    </label>
                                </div>
                            )
                        })}
                        {listCancellation}
                    </div>
                </div>
                <div>
                    <h5>Puede ingresar una descripción nueva aquí:</h5>
                    <div className={styles.add_policies}>
                        <textarea onChange={handleChangeCancellation} name="policies_description" id="policies_description" placeholder="Escribir aquí"></textarea>
                        <button onClick={handleClickCancellation} className={styles.button_add_policies}>+</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>)

}