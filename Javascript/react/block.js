class Block extends React.Component {
    constructor(props) {
        super(props)
    }

    getData(key) {
        return this.props.dataCenter.getData(key)
    }

    putData(key, value) {
        return this.props.dataCenter.putData(key, value)
    }

    putDataWithoutNotify(key, value) {
        return this.props.dataCenter.putDataWithoutNotify(key, value)
    }

    getObservable(key) {
        return this.props.dataCenter.getObservable(key)
    }
}

class BlockGroup extends Block {
    constructor(props) {
        super(props)
    }
}

class BlockManager extends BlockGroup {
    constructor(props) {
        super(props)
    }
}

class DataCenter {
    getData(key) { }
    putData(key, value) { }
    putDataWithoutNotify(key, value) { }
    getObservable(key) { }
}
