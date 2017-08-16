import React from 'react'
import { connect } from 'react-redux'
import { Tree } from 'antd'
const TreeNode  = Tree.TreeNode

@connect(state => ({}), dispath => ({}))
class CompanyTree extends React.Component{
	constructor(props) {
		super(props);
		
	}
	state = {
		list: [{
			title: '山东省总公司',
			subList: [
				{title:'公司领导'},{title:'综合部'},{title:'济南市分公司',subList:[{title:'公司领导'},{title:'综合部'},{title:'历城区分公司',subList:[{title:'公司领导'},{title:'综合部'}]}]}
			]
		}]
	}

	render(){
		return (
			<Tree
		      showLine
		      defaultExpandAll = {true}
		      onSelect={this.onSelect}
		    >
		      	{(f => f(f))(f => list => list.map((val,index) => val.subList ? (
		      		<TreeNode title={val.title} key={`${val.title}-${index}`}>
		      			{f(f)(val.subList)}
		      		</TreeNode>
		      	) : (
					<TreeNode title={val.title} key={`${val.title}-${index}`} />
		      	) ))(this.state.list)}
		    </Tree>
		)
	}
}

export default CompanyTree