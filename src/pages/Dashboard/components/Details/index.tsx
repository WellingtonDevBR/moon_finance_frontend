import { NavLink, useLocation } from "react-router-dom";
import { Chart } from "../Chart";
import { FooterContainer, FooterItem } from "./styles";



export function Details() {
    const location = useLocation()
    if (location.state) {
        var state = location.state.state
    }
    return (
        <FooterContainer>
                <section>
                    <h2>Orders</h2>
                    <FooterItem>
                        <header>
                            <NavLink 
                            className={
                                state === 'today' 
                                ? 'actived' 
                                : 'none' } 
                            to={'#today'} 
                            state={{ state: "today" }}>
                                TODAY
                            </NavLink>
                            <NavLink 
                                className={
                                    state === 'week' 
                                    ? 'actived' 
                                    : 'none' } 
                                to={'#week'} 
                                state={{ state: "week" }}>
                                    WEEK
                            </NavLink>
                            <NavLink 
                                className={
                                    state === 'month' 
                                    ? 'actived' 
                                    : 'none' } 
                                to={'#month'} 
                                state={{ state: "month" }}>
                                MONTH
                            </NavLink>
                        </header>
                        <section>
                          <p>Orders Today</p>
                          <span>525</span>
                          <p>Sales Today</p>
                          <span>$ 12,125</span>
                          <p>Pending Today</p>
                          <span>12</span>
                        </section>
                    </FooterItem>
                    <FooterItem>
                        <header>
                            <span>Money Management</span>
                        </header>
                        <section>
                          <p>Total Payment</p>
                          <span>525</span>
                          <p>Funds</p>
                          <span>$ 12,125</span>
                          <p>Earn Today</p>
                          <span>12</span>
                        </section>
                    </FooterItem>
                </section>
                <section>
                    <h2>Sales Summary</h2>
                    <FooterItem>
                        <header>
                            <span>Money Management</span>
                        </header>
                        <Chart />
                    </FooterItem>
                </section>
            </FooterContainer>
    )
}