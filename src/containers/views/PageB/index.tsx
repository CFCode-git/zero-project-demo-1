import React from 'react'
import { Button } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const PageB = ({ history }: RouteComponentProps) => {
    return (
        <div>
            <div>PageB</div>
            <Button type="primary" onClick={() => history.push('/')}>
                Go To A
            </Button>
        </div>
    )
}

export default withRouter(PageB)
