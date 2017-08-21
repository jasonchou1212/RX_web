import React from 'react'
import styles from './index.less'
import { connect } from 'dva'
import { Tabs,} from 'antd'

class Header extends React.Component({
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount() {
		
	}

	render(
			<div className={styles.}>
				<div>
					联系我们<br/>
					电话：0755-12345678<br/>
					邮箱：123@bqjr.cn<br/>
					地址：深圳市福田区新浩e都3楼
				</div>
				<div className={styles.qrCode}>
					二维码
				</div>
			</div>
		)
})

export default Header