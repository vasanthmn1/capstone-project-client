import { Progress } from 'antd'
import React from 'react'

const Analyites = ({ gettAlltran }) => {
    // total
    const totalTrancition = gettAlltran.length
    const totalIncometranction = gettAlltran.filter(transaction => transaction.type === 'income')
    const totalExpensetranction = gettAlltran.filter(transaction => transaction.type === 'expense')
    const totalIncomePercent = (totalIncometranction.length / totalTrancition) * 100
    const totalExpensePercent = (totalExpensetranction.length / totalTrancition) * 100


    // 

    const totalTurnover = gettAlltran.reduce(
        (acc, transction) => acc + transction.amount, 0)

    const totalincomeTurnover = gettAlltran.filter((transction) => transction.type === "income").reduce((acc, transaction) => acc + transaction.amount, 0)

    const totalEcpensceTurnover = gettAlltran.filter((transction) => transction.type === "expense").reduce((acc, transaction) => acc + transaction.amount, 0)

    const totalIncometurnOverpresent = (totalincomeTurnover / totalTurnover) * 100
    const totalExpenseturnOverpresent = (totalEcpensceTurnover / totalTurnover) * 100


    const catagorys = [
        "Salary",
        "Projet",
        "Trip",
        "Shopping",
        "Fee",
        "Tax",
        "Medical"
    ]

    return (
        <div className='container '>
            <div className='row'>
                <div className='col-lg-6 mt-5 '>
                    <div className='card '>
                        <div className='row  ' >
                            <div className='card-header'>
                                Total Transction : {totalTrancition}
                            </div>
                            <div className='col-md-4 col-sm-4 py-4  '>

                                <div className='card-body'>
                                    <h5 className='text-success'>Income:{totalIncometranction.length}</h5>
                                    <h5 className='text-danger'>Expence:{totalExpensetranction.length}</h5>
                                </div>
                            </div>
                            <div className='col-md-6 d-flex col-sm-8  py-4  '>
                                <Progress type='circle'
                                    strokeColor={'green'}
                                    className='mx-2'
                                    percent={totalIncomePercent.toFixed(0)}
                                />
                                <Progress type='circle'
                                    strokeColor={'red'}
                                    className='mx-2'
                                    percent={totalExpensePercent.toFixed(0)}
                                />
                            </div>



                        </div>
                    </div>
                </div>
                <div className='col-lg-6 mt-5'>
                    <div className='card'>
                        <div className='row'>
                            <div className='card-header'>
                                Total TurnOver : {totalTurnover}
                            </div>
                            <div className='col-md-4 col-sm-4 py-4'>
                                <div className='card-body'>
                                    <h5 className='text-success'>Income:{totalincomeTurnover}</h5>
                                    <h5 className='text-danger'>Expence:{totalEcpensceTurnover}</h5>
                                </div>
                            </div>
                            <div className='col-md-8 col-sm-8 d-flex py-4'>
                                <div>
                                    <Progress type='circle'
                                        strokeColor={'green'}
                                        className='mx-2'
                                        percent={totalIncometurnOverpresent.toFixed(0)}
                                    />
                                    <Progress type='circle'
                                        strokeColor={'red'}
                                        className='mx-2'
                                        percent={totalExpenseturnOverpresent.toFixed(0)}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-6 mt-3'>
                    <h4>Category Income</h4>
                    {

                        catagorys.map((val) => {
                            const amount = gettAlltran.filter(tran => tran.type === "income" && tran.catagory === val).reduce((acc, tran) => acc + tran.amount, 0)

                            return (
                                // amount > 0 && (
                                <div className='card my-2' >
                                    <div className='cord-body'>
                                        <h1>{val}</h1>
                                        <catagorys />
                                        <Progress percent={((amount / totalincomeTurnover) * 100).toFixed(0)} />
                                    </div>
                                </div>
                                // )

                            )
                        })

                    }
                </div>
                <div className='col-lg-6 mt-3'>
                    <h4>Category Expence</h4>
                    {

                        catagorys.map((val) => {
                            const amount = gettAlltran.filter(tran => tran.type === "expense" && tran.catagory === val).reduce((acc, tran) => acc + tran.amount, 0)

                            return (
                                // amount > 0 && (
                                <div className='card  my-2'>
                                    <div className='cord-body '>
                                        <h1>{val}</h1>
                                        <catagorys />
                                        <Progress percent={((amount / totalincomeTurnover) * 100).toFixed(0)} />
                                    </div>
                                </div>
                                // )

                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default Analyites
