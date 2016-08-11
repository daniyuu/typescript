var React = require('react');
var ReactDOM = require('react-dom');

var WholePageModal = require('../../Common/Modals/WholePageModal');

var AddNewTile = require('../Tiles/AddNewTile');
var AvgDailySpendTile = require('../Tiles/AvgDailySpendTile');
var OpenTicketsTile = require('../Tiles/OpenTicketsTile');
var OpportunitiesTile = require('../Tiles/OpportunitiesTile');
var RevenueTargetTile = require('../Tiles/RevenueTargetTile');
var SpendingTile = require('../Tiles/SpendingTile');
var TotalAlertsTile = require('../Tiles/TotalAlertsTile');

var BobTileStore = require('../../../Stores/BobTileStore');

var AddTileItem = React.createClass({
    getInitialState: function() {
        return {
            isHighlight: false
        };
    },

    handleMouseEnter: function(e) {
        this.setState({isHighlight: true});
    },
    
    handleMouseLeave: function(e) {
        this.setState({isHighlight: false});
    },
    
    select: function(e) {
        this.props.addTile(this.props.name);
    },
   
   render: function () {
       var itemClassName = "";
       if(this.state.isHighlight){
           itemClassName = "add-tile-item add-tile-item-highlight";
       }
       else {
           itemClassName = "add-tile-item";
       }
       
       return (
            <div className={itemClassName} 
                onMouseEnter={this.handleMouseEnter} 
                onMouseLeave={this.handleMouseLeave} 
                onClick={this.select}>
                <span>{this.props.name}</span>
            </div>           
       )
   }  
});


var BobDashboard = React.createClass({

    getInitialState: function() {
        return {
            isShowAddTileModal: false
        };
    },  
  
  
  hideAddTileModal: function () {
      this.setState({isShowAddTileModal: false});
  },
  
  showAddTileModal: function() {
      this.setState({isShowAddTileModal: true});
  },
  
  addTile: function(name) {
      BobTileStore.showTile(name);
      this.setState({isShowAddTileModal: false});
  },
  
  removeTile: function(name) {
      BobTileStore.unshowTile(name);
      this.forceUpdate();      
  },
  
  render: function(){
    
    var allShownTiles =   BobTileStore.getAllShownTiles();
    var tileNodes = [];
    for(var i=0; i < allShownTiles.length; ++ i) {
        switch (allShownTiles[i].Name) {
            case "Spend USD": {
                var node = <SpendingTile removeTile={this.removeTile} name={allShownTiles[i].Name} />
                tileNodes.push(node);
                break;
            }

            case "Revenue Target": {
                var node = <RevenueTargetTile removeTile={this.removeTile} name={allShownTiles[i].Name} />
                tileNodes.push(node);                
                break;
            }
            
            case "Open Tickets": {
                var node = <OpenTicketsTile removeTile={this.removeTile} name={allShownTiles[i].Name} />
                tileNodes.push(node);                
                break;
            }
            
            case "Opportunities": {
                var node = <OpportunitiesTile removeTile={this.removeTile} name={allShownTiles[i].Name} />
                tileNodes.push(node);                
                break;
            }
            
            case "Total Alerts": {
                var node = <TotalAlertsTile removeTile={this.removeTile} name={allShownTiles[i].Name} />
                tileNodes.push(node);                
                break;
            }     
            
            case "Avg. Daily Spend USD": {
                var node = <AvgDailySpendTile removeTile={this.removeTile} name={allShownTiles[i].Name} />
                tileNodes.push(node);   
                break;
            }                                                       
        }
    }
    
    var addTileNode = null;
    if (this.state.isShowAddTileModal) {
        var unShownTile = BobTileStore.getAllUnshownTiles();
        
        if(unShownTile.length > 0) {
            addTileNode = unShownTile.map(function(value) {
                return (
                   <AddTileItem name={value.Name} addTile={this.addTile} />
                )
            }.bind(this));            
        }
    }    
    
    tileNodes.push(<AddNewTile clickAction={this.showAddTileModal} />);      
      
    return (
        <div className="book-content" >
            <WholePageModal isShow={this.state.isShowAddTileModal} hideModal={this.hideAddTileModal} >
                <div className="add-tile-panel">
                    <div>
                        {"Select tile to add (only for demo UI)"}
                    </div>
                    <hr />
                    {addTileNode}
                </div>
            </WholePageModal>
                        
            <div className="book-bottom-content">
                <div className="book-bottom-content-tiles">
                    {tileNodes}
                </div>
                <div className="book-bottom-content-perf">
                    <div className="debug_temp_perf_image_1">
                        <img src="temp_perf_1.png" />
                    </div>
                    <div className="debug_temp_perf_image_2">
                        <img src="temp_perf_2.png" />
                    </div>
                    <div className="debug_temp_perf_image_3">
                        <img src="temp_perf_3.png" />
                    </div>  
                    <div className="debug_temp_perf_image_4">
                        <img src="temp_perf_4.png" />
                    </div>                                                              
                </div>                
            </div>
        </div>
    )
  }
});

module.exports = BobDashboard;