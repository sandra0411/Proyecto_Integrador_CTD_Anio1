import React from 'react';
import styles from '../../styles/product_detail/productPoliciesStyle.module.css';

export default function Policies({ product }) {
    return (
        <div id={styles.container_policies}>
            <h2 id={styles.h2_policies}>Qué tenés que saber</h2>
            <hr id={styles.hr_policies} />

            <div id={styles.container_rules}>
                <div>
                    <h3 className={styles.h3_policies}>Normas de la casa</h3>
                    {product.policyHouseRules.length > 0 ?
                        product.policyHouseRules.map(function (rule, index) {
                            return (
                                <p key={index} className={styles.paragraph}>{rule.descriptionHouseRules}</p>
                            )
                        }) : <></>}
                </div>
                <div>
                    <h3 className={styles.h3_policies}>Salud y Seguridad</h3>
                    {product.policyHealthAndSecurity.length > 0 ? product.policyHealthAndSecurity.map(function (rule, index) {
                        return (
                            <p key={index} className={styles.paragraph}>{rule.descriptionHealthAndSecurity}</p>
                        )
                    }) : <></>}
                </div>
                <div>
                    <h3 className={styles.h3_policies}>Política de cancelación</h3>
                    {product.policyCancellation.length > 0 ? product.policyCancellation.map(function (rule, index) {
                        return (
                            <p key={index} className={styles.paragraph}>{rule.description}</p>
                        )
                    }) : <></>}
                </div>
            </div>
        </div>
    )
}