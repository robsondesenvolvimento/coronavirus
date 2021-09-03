import React from 'react';

function TabelaCoronavirus(props) {
    return (
        <div className="p-4">
            <table className="table table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="w-5">Estado</th>
                        <th scope="col" className="w-25">Intectados</th>
                        <th scope="col" className="w-25">Mortos</th>
                    </tr>
                </thead>
                <tbody>
                    {props.dados.map((value, index) => {
                        if (index > 0) {
                            return (
                                <tr key={index + value[0]}>
                                    <td>{value[0]}</td>
                                    <td>{value[1]}</td>
                                    <td>{value[2]}</td>
                                </tr>
                            )
                        }

                    })}
                </tbody>
            </table>
        </div>
    )

}

export default TabelaCoronavirus;