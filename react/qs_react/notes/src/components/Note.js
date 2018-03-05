import React, { Component } from 'react';
import _ from 'lodash'
class Note extends Component {
    state = {
        entity: this.props.entity,
        body: this.props.entity.body,
        open: false,
        destoryEntity: this.props.destoryEntity
    }
    header () {
        // 去除多余的空格和字
        return _.truncate(this.state.body, { length: 30}) || '新建笔记';
    }
    render () {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">
                        { this.header() }
                    </div>
                </div>
            </div>
        );
    }
}

export default Note;