module.exports = function(sequelize, DataTypes) {
	var Share = sequelize.define("Share", {
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

