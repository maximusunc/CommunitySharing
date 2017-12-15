module.exports = function(sequelize, DataTypes) {
	var Share = sequelize.define("Share", {
		share_date: {
		        type: DataTypes.DATE,
		        defaultValue: sequelize.NOW,
		        allowNull: false
		    },
		    promise_date: {
		    	type: DataTypes.DATEONLY,
		    	allowNull: true
		    },
			return_date: {
			type: DataTypes.DATE,			
			allowNull: true
			}

	});

	Share.associate = function(models) {
		Share.belongsTo(models.User, {as: 'Owner',
			foreignKey: {
					allowNull: false
				}
			});
		Share.belongsTo(models.User, {as: 'Borrower', 
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

