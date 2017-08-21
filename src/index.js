import dva from 'dva'
import './index.less'
import createLoading from 'dva-loading'
import { browserHistory } from 'dva/router'

// 1. Initialize
const app = dva({
    ...createLoading(),
    history: browserHistory,
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/app"))
// app.model(require("./models/feedback"))

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root')