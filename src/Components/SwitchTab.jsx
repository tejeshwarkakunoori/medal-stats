import React from 'react'

const SwitchTab = ({activeTab, handleChangeTab}) => {
  return (
    <div className='tabs'>
			<div className={activeTab === 'table' ? 'tab selected-tab' : 'tab'}
				onClick={() => handleChangeTab('table')}
			>
				Table
			</div>
      <div className={activeTab === 'chart' ? 'tab selected-tab' : 'tab'}
				onClick={() => handleChangeTab('chart')}
			>
				Line Chart
			</div>
    </div>
  )
}

export default SwitchTab