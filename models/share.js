module.exports = function(sequelize, DataTypes) {
	var Share = sequelize.define("Share", {
		share_date: {
		        type: 'DATETIME',
		        defaultValue: sequelize.NOW,
		        allowNull: false
		    },
		    promise_date: {
		    	type: 'DATE',
		    	allowNull: true
		    },
			return_date: {
			type: 'DATETIME',			
			allowNull: true
		}

	});

	Share.associate = function(models) {
		Share.belongsTo(models.User, {
			foreignKey: {
					allowNull: false
				}
			});
		Share.belongsTo(models.Item, {
			foreignKey: {
				allowNull: false
			}
		})
	};

	return Share;

};

