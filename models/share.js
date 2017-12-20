module.exports = function(sequelize, DataTypes) {
	var Share = sequelize.define("Share", {
		name: {
			type: DataTypes.STRING
		}
	});

	Share.associate = function(models) {
		Share.belongsTo(models.User, {as: 'Owner',
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

