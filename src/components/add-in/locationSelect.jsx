import Select from "react-select";
import useLocationSelect from "./useLocationSelect";

function LocationSelect() {
   const {
      state,
      onCitySelect,
      onDistrictSelect,
      onWardSelect,
      onSubmit
   } = useLocationSelect(false);

   const {
      cityOptions,
      districtOptions,
      wardOptions,
      selectedCity,
      selectedDistrict,
      selectedWard
   } = state;

   return (
      <div className="col-md-12 form-group">
         <Select
         className="country_select mb-3"
            name="cityId"
            key={`cityId_${selectedCity?.value}`}
            isDisabled={cityOptions.length === 0}
            options={cityOptions}
            onChange={(option) => onCitySelect(option)}
            placeholder="Tỉnh/Thành"
            defaultValue={selectedCity}
         />

         <Select
         className="country_select mb-3"
            name="districtId"
            key={`districtId_${selectedDistrict?.value}`}
            isDisabled={districtOptions.length === 0}
            options={districtOptions}
            onChange={(option) => onDistrictSelect(option)}
            placeholder="Quận/Huyện"
            defaultValue={selectedDistrict}
         />

         <Select
         className="country_select"
            name="wardId"
            key={`wardId_${selectedWard?.value}`}
            isDisabled={wardOptions.length === 0}
            options={wardOptions}
            placeholder="Phường/Xã"
            onChange={(option) => onWardSelect(option)}
            defaultValue={selectedWard}
         />
      </div>
   );
}

export default LocationSelect;