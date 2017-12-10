module.exports = function(sequelize, DataTypes) {
	var Share = sequelize.define("Share", {
		share_date: {
		        type: 'TIMESTAMP',
		        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
		        allowNull: false
		    },
		return_date: {
			type: 'TIMESTAMP',
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			allowNull: false
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

