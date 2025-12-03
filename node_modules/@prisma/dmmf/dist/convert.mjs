function datamodelEnumToSchemaEnum(datamodelEnum) {
  return {
    name: datamodelEnum.name,
    data: datamodelEnum.values.map((v) => ({
      key: v.name,
      value: v.dbName ?? v.name
    }))
  };
}
function datamodelSchemaEnumToSchemaEnum(datamodelSchemaEnum) {
  return {
    name: datamodelSchemaEnum.name,
    data: datamodelSchemaEnum.values.map((v) => ({
      key: v,
      value: v
    }))
  };
}
export {
  datamodelEnumToSchemaEnum,
  datamodelSchemaEnumToSchemaEnum
};
