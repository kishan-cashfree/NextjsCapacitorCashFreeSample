import Head from 'next/head';
import styles from '../styles/Home.module.css';

const loadCashfreePg = () => import('@awesome-cordova-plugins/cashfree-pg');

export default function Home() {
    const initiateWebPayment = async () => {
        const {CFEnvironment, CFPaymentGateway, CFSession, CFWebCheckoutPayment} = await loadCashfreePg();
        const callbacks = {
            onVerify: function (result) {
                console.log("This is in the SDK Verify: " + JSON.stringify(result));
            },
            onError: function (error) {
                console.log("This is in the SDK Error: " + JSON.stringify(error));
            }
        };
        CFPaymentGateway.setCallback(callbacks)
        CFPaymentGateway.doWebCheckoutPayment(
            new CFWebCheckoutPayment(
                new CFSession("session_jOkl-xetsUdUiuVFxhPMhbIHh6UTI8hM_dOxgI3HBiCkjxGHkFHetws8ijujFDe3En3kiKLrYNZQEODPkr62bpS3kb7zufM1b5FzVnEncSFy",
                    "order_101024392kjkZw8fi4dAkMlUChfG9TYpHsI",
                    CFEnvironment.SANDBOX
                ),
                null)
        )
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <div>
                    <h1>CashFree Payment</h1>
                    <button onClick={initiateWebPayment}>Start Payment</button>
                </div>
            </main>

            <style jsx>{`
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                footer img {
                    margin-left: 0.5rem;
                }

                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    color: inherit;
                }

                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-size: 1.1rem;
                    font-family: Menlo,
                    Monaco,
                    Lucida Console,
                    Liberation Mono,
                    DejaVu Sans Mono,
                    Bitstream Vera Sans Mono,
                    Courier New,
                    monospace;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system,
                    BlinkMacSystemFont,
                    Segoe UI,
                    Roboto,
                    Oxygen,
                    Ubuntu,
                    Cantarell,
                    Fira Sans,
                    Droid Sans,
                    Helvetica Neue,
                    sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    );
}
